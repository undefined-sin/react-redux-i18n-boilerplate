import i18next from 'i18next';

let instance = undefined;
const dataSetName = "appContext";

const translationFunc = (e) => i18next.t(e);

export function selectApplicationContext (){
  if (!instance){
    const node = document.getElementById("application");
    instance = JSON.parse(node.dataset[dataSetName]);
  }
  return instance;
};

export function selectApplication(store){
  return store.application;
};

export function selectLanguage(store){
  return selectApplication(store).language;
};

export function selectTranslator(){
  return translationFunc;
} 