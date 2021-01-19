import * as fs from 'fs';
import * as path from 'path';
import { Command } from 'commander';
import * as mustache from 'mustache';

const VIEW_TEMPLATE_PATH = './templates/view.mustache';
const STYLE_TEMPLATE_PATH = './templates/style.mustache';

const render = (dirPath: string, compName: string) => {
  // Check the existence of filePath
  if (!dirPath) {
    console.error('Please add directory path');
    process.exit(1);
  }
  dirPath = path.join('src/views', dirPath);

  const viewPath = path.join(dirPath, 'index.tsx');
  const stylePath = path.join(dirPath, 'style.ts');
  const isExist = fs.existsSync(viewPath) || fs.existsSync(stylePath);
  if (isExist) {
    console.error(`${compName} is already exist.`);
    process.exit(1);
  }
  const isDirExist = fs.existsSync(dirPath);
  if (!isDirExist) {
    fs.mkdirSync(dirPath);
  }
  const viewTemplate = fs.readFileSync(path.join(__dirname, VIEW_TEMPLATE_PATH), {
    encoding: 'utf8',
  });
  const styleTemplate = fs.readFileSync(path.join(__dirname, STYLE_TEMPLATE_PATH), {
    encoding: 'utf8',
  });
  const view = mustache.render(viewTemplate, {
    compName,
  });
  const style = mustache.render(styleTemplate, {});
  fs.writeFileSync(path.join(viewPath), view);
  fs.writeFileSync(path.join(stylePath), style);
};

const program = new Command();

program
  .option('-d, --dir-path [dirPath]', 'Directory path')
  .option('-n, --comp-name [compName]', 'Component name', 'View')
  .on('--help', function () {
    console.log('');
    console.log('Examples:');
    console.log('  $ yarn gen:view -d view -n View');
  })
  .parse(process.argv);

render(program.opts().dirPath, program.opts().compName);
