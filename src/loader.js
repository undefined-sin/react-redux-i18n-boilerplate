const entries = {};
const loader = {
  register: (name, page, entrypoint) => {
    entries[name] = {
      page,
      entrypoint
    };
  },
  getEntries: () => entries,
  getByName: name => entries[name] || {}
};
window.PAGE_LOADER = loader;
