/*
 Application navigation controllers
 */

angular.module('sisepDevApp')
.controller("MenuCtrl",['$location',
  function($location){

    this.goToUrl = function(url) {
      $location.path(url);
    };

    this.menu_sections = [
      {
        name: 'Página inicial',
        is_toggle:true,
        toggled: false,
        icon: 'dashboard',
        url: 'inicio'

      },
      {
        name: 'Filiados',
        is_toggle:true,
        icon: 'user',
        menu_items: [
          {
            name: 'Ver Todos',
            url: 'listar_associado',
            pageName: 'Listar Associados'
          },
          {
            name: 'Adicionar',
            url: 'add_associado'
          },
          {
            name: 'Relatórios',
            demo: true
          }
        ]
      },
      {
        name: 'Entidades Empegadoras',
        is_toggle:true,
        toggled: false,
        icon: 'building',
        menu_items: [
          {
            name: 'Ver Todos',
            demo: true
          },
          {
            name: 'Adicionar',
            demo: true
          },
          {
            name: 'Relatórios',
            demo: true
          }
        ]
      },
      
      {
        name: 'Conveniados',
        is_toggle:true,
        icon: 'group',
        menu_items: [
          {
            name: 'Ver Todos',
            demo: true
          },
          {
            name: 'Adicionar',
            demo: true
          },
          {
            name: 'Relatórios',
            demo: true
          }
        ]
      },
      {
        name: 'Cargos',
        is_toggle:true,
        toggled: false,
        icon: 'vcard-o',
        menu_items: [
          {
            name: 'Ver Todos',
            demo: true
          },
          {
            name: 'Adicionar',
            demo: true
          }
        ]
      },
      {
        name: 'Painel de Controle',
        is_toggle:true,
        toggled: false,
        icon: 'wrench',
        menu_items: [
          {
            name: 'Permissões do Sistema',
            demo: true
          },
          {
            name: 'Adicionar',
            demo: true
          }
        ]
      }
    ];

    this.getClass = function(url) {

      if('/' + url == $location.path()){
        return "active";
      }
      else {
        return "";
      }

    };

    this.getActiveParent = function(items) {
      return _.find(items, function(value){
        return '/' + value.url == $location.path();
      });
    };

    this.toggle = function(index){
      var $this = this;
      this.menu_sections.map(function(ix, position) {
        var toggle = $this.menu_sections[index].toggled ? false : true;
        $this.menu_sections[position].toggled = position !== index ?  false : toggle;
      });
      $(".main-menu").children("li:nth-child(" + (index + 1) + ")").toggleClass("open").find("ul").stop().slideToggle(function(){
        $(".main-menu").children("li:nth-child(" + (index + 1) + ")").siblings().removeClass("open").find("ul").stop().slideUp();
      });
    };
  }
]);