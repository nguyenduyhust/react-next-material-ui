import * as fs from 'fs';
import * as path from 'path';
import { Command } from 'commander';
import * as mustache from 'mustache';

const PAGE_ROUTE_TEMPLATE_PATH = './templates/page-route.mustache';
const PAGE_VIEW_TEMPLATE_PATH = './templates/page-view.mustache';
const STYLE_TEMPLATE_PATH = './templates/style.mustache';

const render = (route: string, name: string) => {
  // Check the existence of filePath
  if (!route) {
    console.error('Please add page route');
    process.exit(1);
  }
  if (!name) {
    console.error('Please add page name');
    process.exit(1);
  }
  const pageRoutePath = path.join('pages', route, 'index.tsx');
  const pageViewPath = path.join('src/views', route, 'index.tsx');
  const stylePath = path.join('src/views', route, 'style.ts');

  const isExist =
    fs.existsSync(pageRoutePath) || fs.existsSync(pageViewPath) || fs.existsSync(stylePath);
  if (isExist) {
    console.error(`${name} page is already exist.`);
    process.exit(1);
  }
  // Page route
  if (!fs.existsSync(path.dirname(pageRoutePath))) {
    fs.mkdirSync(path.dirname(pageRoutePath));
  }
  const pageRouteTemplate = fs.readFileSync(path.join(__dirname, PAGE_ROUTE_TEMPLATE_PATH), {
    encoding: 'utf8',
  });
  const pageRoute = mustache.render(pageRouteTemplate, {
    route,
  });
  fs.writeFileSync(path.join(pageRoutePath), pageRoute);
  // Page view
  if (!fs.existsSync(path.dirname(pageViewPath))) {
    fs.mkdirSync(path.dirname(pageViewPath));
  }
  const pageViewTemplate = fs.readFileSync(path.join(__dirname, PAGE_VIEW_TEMPLATE_PATH), {
    encoding: 'utf8',
  });
  const pageView = mustache.render(pageViewTemplate, {
    pageName: name,
  });
  const styleTemplate = fs.readFileSync(path.join(__dirname, STYLE_TEMPLATE_PATH), {
    encoding: 'utf8',
  });
  fs.writeFileSync(path.join(pageViewPath), pageView);
  // Style
  if (!fs.existsSync(path.dirname(stylePath))) {
    fs.mkdirSync(path.dirname(stylePath));
  }
  const style = mustache.render(styleTemplate, {});
  fs.writeFileSync(path.join(stylePath), style);
};

const program = new Command();

program
  .option('-r, --route [route]', 'Page route')
  .option('-n, --name [name]', 'Page name')
  .on('--help', function () {
    console.log('');
    console.log('Examples:');
    console.log('  $ yarn gen:page -r test -n Test');
  })
  .parse(process.argv);

render(program.opts().route, program.opts().name);
