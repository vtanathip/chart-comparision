# Chart Comparision

## Objective

The test chart application has many test scenarios that can happen with one chart, e.g., drawing a trendline on a chart. add text, horizontal line in some cases we need to perform visual testing on it by comparing image

## Library dependencies

- [Look same](https://www.npmjs.com/package/looks-same) for compare image and create different image
- [Sharp](https://www.npmjs.com/package/sharp) for manipulate image e.g. resizing

## Prerequisite

- Create folder `data`
- Add `baseImage.png` by yourself for testing
- Add `fakeBaseImage.png` and `fakeCompareImage.png` for positive test

## How to run

- `npm install`
- open VScode use `launch run`
