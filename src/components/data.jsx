export default () => {
  const data = {
    nodes: [
      {id: 0, x: 10, y: 50, urlIndex: 'iconA', name: '盘货', number: '234,453,758'},
      {id: 1, x: 20, y: 40, urlIndex: 'iconB', name: '销量计划', number: '234,453,758'},
      {id: 2, x: 30, y: 40, urlIndex: 'iconC', name: '库存峰值', number: '234,453,758'},
      {id: 3, x: 40, y: 40, urlIndex: 'iconD', name: '在库', number: '234,453,758'},
      {id: 4, x: 40, y: 30, urlIndex: 'iconE', name: '下单采购', number: '234,453,758'},
      {id: 5, x: 50, y: 30, urlIndex: 'iconF', name: '入国内仓', number: '234,453,758'},
      {id: 6, x: 60, y: 30, urlIndex: 'iconG', name: '入保税仓', number: '234,453,758'},
      {id: 7, x: 70, y: 30, urlIndex: 'iconH', name: '入海外仓', number: '234,453,758'},
      {id: 8, x: 30, y: 70, urlIndex: 'iconI', name: '售罄率', number: '5.1%'},
      {id: 9, x: 40, y: 70, urlIndex: 'iconJ', name: '成交', number: '234,453,758'},
      {id: 10, x: 40, y: 60, urlIndex: 'iconK', name: '清关', number: '234,453,758'},
      {id: 11, x: 50, y: 60, urlIndex: 'iconL', name: '发货', number: '234,453,758'},
      {id: 12, x: 50, y: 70, urlIndex: 'iconK', name: '清关', number: '234,453,758'},
      {id: 13, x: 60, y: 60, urlIndex: 'iconN', name: '快递', number: '234,453,758'},
      {id: 14, x: 70, y: 60, urlIndex: 'iconO', name: '签收', number: '234,453,758'},
      {id: 15, x: 70, y: 50, urlIndex: 'iconP', name: '退货', number: '234,453,758'},
    ],
    links: [
      {start: [10, 50], end: [20, 40], middle: [[10, 40]], startPos: 'top', endPos: 'left'}
    ]
  }
  return data;
}