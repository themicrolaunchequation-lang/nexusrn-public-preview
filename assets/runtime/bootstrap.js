(function () {
  "use strict";

  window.NexusRN = window.NexusRN || {};
  window.NexusRN.runtime = window.NexusRN.runtime || {};

  window.NexusRN.runtime.version = "v116-runtime-consolidation";
  window.NexusRN.runtime.bootedAt = new Date().toISOString();

  fetch("data/runtime-manifest.json", { cache: "no-store" })
    .then(function (res) {
      if (!res.ok) throw new Error("Cannot load runtime-manifest.json");
      return res.json();
    })
    .then(function (manifest) {
      window.NEXUS_RUNTIME_MANIFEST = manifest;
      window.NexusRN.runtime.manifestLoaded = true;
      window.NexusRN.runtime.manifest = manifest;
      console.log("[v116] runtime-manifest loaded", manifest);
    })
    .catch(function (err) {
      window.NexusRN.runtime.manifestLoaded = false;
      window.NexusRN.runtime.manifestError = String(err);
      console.error("[v116] manifest load failed", err);
    });

  window.NEXUS_V116_RUNTIME_AUDIT = function () {
    return {
      version: "v116-runtime-consolidation",
      bootstrapLoaded: true,
      manifestLoaded: !!window.NEXUS_RUNTIME_MANIFEST,
      manifest: window.NEXUS_RUNTIME_MANIFEST || null,
      legacyRuntimeDetected: typeof window.NEXUS_V115_RUNTIME_AUDIT === "function",
      v115StillAvailable: typeof window.NEXUS_V115_RUNTIME_AUDIT === "function",
      standaloneQuestions: Array.isArray(window.Q) ? window.Q.length : 0,
      caseSets: Array.isArray(window.CASESETS) ? window.CASESETS.length : 0,
      importedIdealCases: Array.isArray(window.CASESETS)
        ? window.CASESETS.filter(function (c) {
            return String(c.caseId || c.id || "").includes("v84-ideal6q");
          }).length
        : 0,
      scriptTags: document.scripts.length,
      note: "v116 Phase 2: bootstrap now loads runtime-manifest.json."
    };
  };

  console.log("[v116] bootstrap.js loaded");
})();