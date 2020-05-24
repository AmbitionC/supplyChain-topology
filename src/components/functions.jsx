import { stratify } from "d3";

// 根据输入位置映射到SVG中的位置上
const nodeProcess = (data, SVG_WIDTH, SVG_HEIGHT, titleSize, numberSize, iconSize) => {
  data.forEach(item => {
    item.transferedX = SVG_WIDTH * 0.95 * item.x / 100;
    item.transferedY = SVG_HEIGHT * 0.95 * item.y / 100;

    const titleLength = titleSize * item.name.length;
    const numberLength = numberSize / 2 * item.number.length;

    item.titleX = item.transferedX - (titleLength - iconSize) / 2 ;
    item.titleY = SVG_HEIGHT * 0.95 * (item.y - 3) / 100;
    
    item.numberX = item.transferedX - (numberLength - iconSize) / 2;
    item.numberY = SVG_HEIGHT * 0.95 * (item.y - 0.7) / 100;
  })
  return data
}

const linkProcess = (data, SVG_WIDTH, SVG_HEIGHT, iconSize) => {
  if (!(data.start && data.end)) {
    return;
  }
  let path = 'M ';
  path += trasferCore(data.start).join(" ");
  if (data.middle) {
    data.middle.forEach(item => {
      let middleStr = 'L ';
      middleStr += trasferCore(item).join(" ");
      path += middleStr;
    })
  }
  path += 'L ';
  path += trasferCore(data.end).join(" ");
  return path;

  function trasferCore(array) {
    array[0] = SVG_WIDTH * 0.95 * array[0] / 100;
    array[1] = SVG_HEIGHT * 0.95 * array[1] / 100;
    return array;
  }
}



export { nodeProcess, linkProcess }