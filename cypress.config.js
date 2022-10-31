import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/dist/plugin.js';

export default defineConfig({
   e2e: {
       setupNodeEvents(on, config) {
           getCompareSnapshotsPlugin(on, config);
       },
   },
});
