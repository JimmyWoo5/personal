export const renderNode = (h, data, context) => {
  const {props} = context
  const cls = ['org-chart-node']
  const childNodes = []
  const children = data[props.props.children]

  if (isLeaf(data, props.props.children)) {
    cls.push('is-leaf')
  }

  childNodes.push(renderLabel(h, data, context))

  if (data[props.props.expand]) {
    childNodes.push(renderChildren(h, children, context))
  }

  return h('div', {
    domProps: {
      className: cls.join(' ')
    }
  }, childNodes)
}

const isLeaf = (data, prop) => {
  return !(Array.isArray(data[prop]) && data[prop].length > 0)
}

export const renderLabel = (h, data, context) => {
  const {props} = context
  const label = data[props.props.label]
  const renderContent = props.renderContent
  const clickHandler = context.listeners['on-node-click']
  const expandHandler = context.listeners['on-expand']

  let {labelWidth} = props
  if (typeof labelWidth === 'number') {
    labelWidth += 'px'
  }

  const childNodes = []
  if (typeof renderContent === 'function') {
    let vnode = renderContent(h, data)

    vnode && childNodes.push(vnode)
  } else {
    childNodes.push(label)
  }

  if (!isLeaf(data, props.props.children)) {
    let cls = ['org-chart-node-btn']
    if (data[props.props.expand]) {
      cls.push('expanded')
    }
    childNodes.push(h('span', {
      domProps: {
        className: cls.join(' ')
      },
      on: {
        click: e => {
          e.stopPropagation()
          expandHandler && expandHandler(data)
        }
      }
    }))
  }

  return h('div', {
    domProps: {
      className: 'org-chart-node-label'
    },
    style: {width: labelWidth},
    on: {
      click: e => clickHandler && clickHandler(data)
    }
  }, childNodes)
}

export const renderChildren = (h, list, context) => {
  if (Array.isArray(list) && list.length) {
    const children = list.map(item => {
      return renderNode(h, item, context)
    })

    return h('div', {
      domProps: {
        className: 'org-chart-node-children'
      }
    }, children)
  }
  return ''
}

export const render = (h, context) => {
  const {props} = context
  return renderNode(h, props.data, context)
}

export default render
