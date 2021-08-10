let args = '';
args = process.argv.slice(2).join(' ');
if (args === 'Hello') {
  args = args.toLowerCase();
}
console.log(args);
