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
      @on-node-leave="onNodeLeave"
    ></org>
  </div>
</template>

<script>
  import org from '@/components/org-tree'
  var data = [{
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
  export default {
    components: {
      org
    },
    data () {
      return {
        data: []
      }
    },
    created () {
      this.initData(data)
    },
    methods: {
      initData (data) {
        data.forEach(i => {
          i.menuShow = false
          if (i.children) {
            this.initData(i.children)
          }
        })
        this.data = data
      },
      renderContent (h, data) {
        return h('div', null, [
          h('div', null, data.name),
          h('div', null, '( ' + (data.leader ? data.leader : '负责人空缺') + ' )'),
          h('div', null, '人数: ' + data.num),
          this.makeMenus(h, data)
        ])
      },
      makeMenus (h, data) {
        var vue = this
        var menus = []
        menus.push(h('li', {
          on: {
            click: () => vue.handleAdd(data)
          }
        }, '添加部门'))
        menus.push(h('li', {
          on: {
            click: () => vue.handleEdit(data)
          }
        }, '编辑部门'))
        menus.push(h('li', {
          on: {
            click: () => vue.handleCheck(data)
          }
        }, data.type === 0 ? '分配员工' : '查看员工'))
        menus.push(h('li', null, '删除'))
        if (data.menuShow && menus.length) {
          return h('ul', {
            domProps: {
              className: 'menu'
            },
            on: {
              click: () => vue.handleDel(data)
            }
          }, menus)
        }
      },
      handleAdd (data) {
        console.log(data)
      },
      handleEdit (data) {
        console.log(data)
      },
      handleCheck (data) {
        console.log(data)
      },
      handleDel (data) {
        console.log(data)
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
      onNodeClick ({target}, data) {
//      this.currentDOM = this.findLabel(target)
//      console.log(this.currentDOM)
        data.menuShow = !data.menuShow
      },
      onNodeLeave (data) {
        data.menuShow = false
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
  
  .menu{
    position: absolute;width:100%;left:0;top:83px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    z-index: 3000;
  }
</style>
