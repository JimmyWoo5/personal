<template>
  <div>
    <org
      :data='data[0]'
      horizontal
      collapsable
      :label-width="110"
      :label-class-name="labelClassName"
      :props="{label: 'name', expand: 'expand', children: 'children'}"
      :render-content="renderContent"
      @on-expand="onExpand"
      @on-node-click="onNodeClick"
    ></org>
    <transition name="popmenu">
      <div class="popmenu" v-if="popover" v-clickoutside="handleClose" ref="popmenu" :style="popmenuStyle"></div>
    </transition>
  </div>
</template>

<script>
  import org from '@/components/org-tree'
  export default {
    components: {
      org
    },
    data () {
      return {
        popover: false,
        currentDOM: null,
        data: [{
          'id': 274,
          'name': '新公司',
          'leader': 'jimmy',
          'type': 0,
          'num': 17,
          'children': [{
            'id': 291,
            'name': '开发',
            'type': 2,
            'num': 6
          }, {
            'id': 301,
            'name': '测试',
            'type': 2,
            'num': 10,
            'children': [{
              'id': 322,
              'name': '第三方',
              'type': 2,
              'num': 0,
              'children': [{
                'id': 323,
                'name': '都是',
                'type': 2,
                'num': 0,
                'children': [{
                  'id': 324,
                  'name': '斯蒂芬',
                  'type': 2,
                  'num': 0,
                  'children': [{
                    'id': 325,
                    'name': '收到',
                    'type': 2,
                    'num': 0,
                    'children': [{
                      'id': 326,
                      'name': '收到',
                      'type': 2,
                      'num': 0
                    }]
                  }]
                }]
              }]
            }, {
              'id': 327,
              'name': '是多少',
              'type': 2,
              'num': 0
            }, {
              'id': 328,
              'name': 'sd',
              'type': 2,
              'num': 0
            }]
          }, {
            'id': 313,
            'name': 'new4',
            'type': 2,
            'num': 0
          }, {
            'id': 314,
            'name': '反倒是',
            'type': 2,
            'num': 0
          }, {
            'id': 315,
            'name': '分隔符',
            'type': 2,
            'num': 0,
            'children': [{
              'id': 329,
              'name': 'ff',
              'type': 2,
              'num': 0
            }, {
              'id': 330,
              'name': 's',
              'type': 2,
              'num': 0
            }, {
              'id': 331,
              'name': 'sdd',
              'type': 2,
              'num': 0
            }, {
              'id': 332,
              'name': 'gdf',
              'type': 2,
              'num': 0
            }]
          }]
        }]
      }
    },
    computed: {
      popmenuStyle () {
        if (this.currentDOM) {
          let {height, top, left} = this.currentDOM.getBoundingClientRect()

          let offset = top + height
          if (offset > document.documentElement.clientHeight) {
            offset = top - height
          }

          return {
            top: `${offset}px`,
            left: `${left}px`
          }
        }

        return ''
      }
    },
    mounted () {
//    this._click = (e) => {
//      if (this.popover) {
//        clearTimeout(this._timer)
//        this._timer = setTimeout(() => {
//          this.popover = false
//        }, 300)
//      }
//    }

//    document.addEventListener('click', this._click, true)
    },
    beforeDestroy () {
//    if (this._click) {
//      document.removeEventListener('click', this._click, true)
//      this._click = null
//    }
    },
    methods: {
      renderContent (h, data) {
        return h('ul', null, [
          h('li', null, data.name),
          h('li', null, '( ' + (data.leader ? data.leader : '负责人空缺') + ' )'),
          h('li', null, '人数: ' + data.num)
        ])
      },
      labelClassName (data) {
        switch (data.type) {
          case 0:
            return 'boss'
          case 1:
            return 'comp'
          case 2:
            return 'dep'
        }
      },
      handleClose () {
        this.popover = false
      },
      onNodeClick ({target}, data) {
        this.currentDOM = this.findLabel(target)
        this.popover = true
        this.info = data
      },
      findLabel (el) {
        while (el) {
          if (el.tagName === 'DIV') {
            return el
          } else {
            el = el.parentElement
          }
        }
        return null
      },
      onExpand (data) {
        if ('expand' in data) {
          data.expand = !data.expand
          if (!data.expand && data.children) {
            this.collapseChildren(data.children)
          }
        } else {
          this.$set(data, 'expand', true)
        }
      },
      collapseChildren (list) {
        list.forEach(child => {
          if (child.expand) {
            child.expand = false
          }
          if (child.children) {
            this.collapseChildren(child.children)
          }
        })
      }
    }
  }
</script>

<style lang="less">
  *{margin:0;padding: 0;}
  li,ul{list-style: none;}
  
  .org-tree-node-label{cursor: pointer;}
  .boss{background: #b9a06e;}
  .comp{background: #7ea0cf;}
  .dep{background: #666666;}
  
  .popmenu {
    position: absolute;
    width: 140px;
    height: 100px;
    z-index: 3000;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    transition: all .35s ease-in;
  }
  
  /*.popmenu-enter-active,
  .popmenu-leave-active {
    transform-origin: center top;
  }
  .popmenu-enter-active {
    transform: translateY(0) scaleY(1);
  }
  .popmenu-enter,
  .popmenu-leave-active {
    transform: translateY(-20px), scaleY(0);
  }*/
</style>
