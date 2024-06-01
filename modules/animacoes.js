export function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tabmenu] li');
    const tabContent = document.querySelectorAll('[data-tabcontent] section');
  
    if(tabMenu.length && tabContent.length) {
      tabContent[0].classList.add('ativo' , tabContent[0].dataset.anime);
  
      function activeTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
      }
  
      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          activeTab(index);
        });
      });
    }
  }