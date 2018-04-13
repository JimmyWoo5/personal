<template>
  <div>
    <render :data='res.data'></render>
  </div>
</template>

<script>
  export default {
    components: {
      render: {
        name: 'rend',
        template: `<ul >
          <li v-for='i in data'>
            <div @click='i.show=!i.show' style='background:gray'>
              <div>部门: {{i.name}}</div>
              <div>负责人: {{i.leader || '为空'}}</div>
            </div>
            <rend :data='i.children' v-if='i.show'></rend>
          </li>
        </ul>`,
        props: ['data']
      }
    },
    data () {
      return {
        res: {
          'statusCode': 200,
          'statusText': 'OK',
          'data': [{
            'id': 274,
            'name': '新公司',
            'show': false,
            'children': [{
              'id': 339,
              'name': '公司',
              'leader': 'jimmy是割发代首个第三方第都是发是的',
              'type': 1,
              'num': 7,
              'show': false
            }, {
              'id': 291,
              'name': '赚他一个亿科技股份有限责任公司发的地地道道大大的大大的大大的点点滴滴大段的的的',
              'type': 2,
              'num': 2,
              'show': false
            }, {
              'id': 301,
              'name': '测试2',
              'type': 2,
              'num': 20,
              'children': [{
                'id': 322,
                'name': '第三方',
                'type': 2,
                'num': 10,
                'show': false,
                'children': [{
                  'id': 323,
                  'name': '都是2',
                  'type': 2,
                  'num': 7,
                  'show': false,
                  'children': [{
                    'id': 324,
                    'name': '斯蒂芬',
                    'type': 2,
                    'num': 1,
                    'show': false,
                    'children': [{
                      'id': 325,
                      'name': '收到',
                      'type': 2,
                      'num': 1,
                      'show': false,
                      'children': [{
                        'id': 326,
                        'name': '收到',
                        'type': 2,
                        'show': false,
                        'num': 0
                      }]
                    }]
                  }]
                }]
              }]
            }, {
              'id': 349,
              'name': 'SDF',
              'type': 2,
              'show': false,
              'num': 0
            }]
          }]
        }
      }
    }
  }
</script>
<style lang="less">
	ul{margin-left: 20px;margin-bottom: 10px;}
</style>