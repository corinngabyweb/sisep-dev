
/*
* Controllers configuration
*/
angular
  .module('sisepDevApp').constant('config',{
    sidebar_default_open: true,
    chart_lines:'#f5f5f5',
    danger_color:'#C62828',
    color_warning:'#F2B53F',
    md_primary: {
        base: 'indigo',
        shade: '900'
    },
    md_accent: {
        base: 'light-blue',
        shade: '400'
    },
    additional_themes: [
        {
            name: "Red",
            md_primary: {
                base: 'red',
                shade: '500'
            },
            md_accent: {
                base: 'blue-grey',
                shade: '700'
            }
        },
        {
            name: "Pink",
            md_primary: {
                base: 'pink',
                shade: '600'
            },
            md_accent: {
                base: 'cyan',
                shade: '700'
            }
        },
        {
            name: "DeepPurple",
            md_primary: {
                base: 'deep-purple',
                shade: '500'
            },
            md_accent: {
                base: 'deep-orange',
                shade: '500'
            }
        },
        {
            name: "Indigo",
            md_primary: {
                base: 'indigo',
                shade: '900'
            },
            md_accent: {
                base: 'pink',
                shade: '600'
            }
        },
        {
            name: "Blue",
            md_primary: {
                base: 'blue',
                shade: '700'
            },
            md_accent: {
                base: 'red',
                shade: '600'
            }
        },
        {
            name: "LightBlue",
            md_primary: {
                base: 'light-blue',
                shade: '400'
            },
            md_accent: {
                base: 'pink',
                shade: '600'
            }
        },
        {
            name: "Cyan",
            md_primary: {
                base: 'cyan',
                shade: '800'
            },
            md_accent: {
                base: 'green',
                shade: '600'
            }
        },
        {
            name: "Teal",
            md_primary: {
                base: 'teal',
                shade: '800'
            },
            md_accent: {
                base: 'red',
                shade: '600'
            }
        },
        {
            name: "Green",
            md_primary: {
                base: 'green',
                shade: '500'
            },
            md_accent: {
                base: 'lime',
                shade: '600'
            }
        },
        {
            name: "LightGreen",
            md_primary: {
                base: 'light-green',
                shade: '700'
            },
            md_accent: {
                base: 'grey',
                shade: '800'
            }
        },
        {
            name: "Lime",
            md_primary: {
                base: 'lime',
                shade: '500'
            },
            md_accent: {
                base: 'blue-grey',
                shade: '700'
            }
        },
        {
            name: "Yellow",
            md_primary: {
                base: 'yellow',
                shade: '700'
            },
            md_accent: {
                base: 'deep-orange',
                shade: '500'
            }
        },
        {
            name: "Amber",
            md_primary: {
                base: 'amber',
                shade: '500'
            },
            md_accent: {
                base: 'deep-purple',
                shade: '700'
            }
        },
        {
            name: "Orange",
            md_primary: {
                base: 'orange',
                shade: '800'
            },
            md_accent: {
                base: 'pink',
                shade: '700'
            }
        },
        {
            name: "DeepOrange",
            md_primary: {
                base: 'deep-orange',
                shade: '600'
            },
            md_accent: {
                base: 'blue-grey',
                shade: '700'
            }
        },
        {
            name: "Brown",
            md_primary: {
                base: 'brown',
                shade: '800'
            },
            md_accent: {
                base: 'green',
                shade: '700'
            }
        },
        {
            name: "Grey",
            md_primary: {
                base: 'grey',
                shade: '800'
            },
            md_accent: {
                base: 'red',
                shade: '500'
            }
        },
        {
            name: "BlueGrey",
            md_primary: {
                base: 'blue-grey',
                shade: '800'
            },
            md_accent: {
                base: 'pink',
                shade: '700'
            }
        }
    ]
});

angular
  .module('sisepDevApp')
  .run(["$rootScope", "$location", "$mdColorPalette", 
    function ($rootScope, $location, $mdColorPalette) {

      $rootScope.app_name = "SISEP";
      

      $rootScope.getMaterialColor = function (base, shade) {
        var color = $mdColorPalette[base][shade].value;
        return 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
      };

      $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
      });


      $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
      });

      $rootScope.RGB2HTML = function (rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
      };

    }]);

  
  angular
  .module('sisepDevApp').config(function ($mdThemingProvider, $mdGestureProvider, config) {

    $mdThemingProvider.alwaysWatchTheme(true);

    $mdGestureProvider.skipClickHijack();

    $mdThemingProvider.theme('default')
      .primaryPalette(config.md_primary.base, {
        'default': config.md_primary.shade
      })
      .accentPalette(config.md_accent.base, {
        'default': config.md_accent.shade
      });
  });