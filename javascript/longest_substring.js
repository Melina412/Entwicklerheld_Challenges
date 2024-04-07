function cutString(str) {
  const allSubstrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.slice(i, j);
      allSubstrings.push(substring);
    }
  }
  return allSubstrings;
}

function findLongestSubstring(str1, str2) {
  let substr1 = cutString(str1);
  let substr2 = cutString(str2);
  console.log({ substr1 });
  console.log({ substr2 });

  const findCommon = (array1, array2) =>
    array1.filter((str) => array2.includes(str));

  const commonStrings = findCommon(substr1, substr2);
  console.log({ commonStrings });

  const longestStrings = commonStrings.reduce((a, b) => {
    if (!a.length || b.length === a[0].length) {
      a.push(b);
    } else if (b.length > a[0].length) {
      a = [b];
    }
    return a;
  }, []);

  console.log({ longestStrings });
  const longestSubstring = longestStrings.join(' ');
  return longestSubstring;
}

const string1 = 'Hallohallowurst';
const string2 = 'ichsagmalhallooderdochHallo';

const result = findLongestSubstring(string1, string2);
console.log({ result });
