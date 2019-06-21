String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

module.exports.getType = (title) => {
  if (/^.*Category/.test(title)) return 'category';
  if (/^.*book/.test(title)) return 'book';
  if (/^.*Talk:/.test(title)) return 'talk';
  if (/^.*File:/.test(title)) return 'file';
  if (/^.*Wikipedia:/.test(title)) return 'wiki_article';
  else return 'article';
};

module.exports.formatTitle = (title) => {
  title = title.split(':')[0];
  let index = title.indexOf('\'');
  if (index > -1)
    return title.splice(index, 0, "'");
  else
    return title;
};