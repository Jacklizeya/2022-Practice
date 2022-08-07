class Solution {
  static List<String> subdomainVisits(List<String> cpdomains) {
    final result = <String>[];
    final domainToCount = <String, int>{};
    for (final cpdomain in cpdomains) {
      final count = int.parse((cpdomain.split(' ')[0]));
      final cpdomainString = cpdomain.split(' ')[1];
      final cpdomainAsArray = cpdomainString.split('.');
      for (int i = 0; i <= cpdomainAsArray.length - 1; i++) {
        final subCpdomainAsArray =
            cpdomainAsArray.sublist(i, cpdomainAsArray.length);
        var subCpdomainInString = subCpdomainAsArray.join('.');

        if (domainToCount[subCpdomainInString] == null) {
          domainToCount[subCpdomainInString] = count;
        } else {
          domainToCount[subCpdomainInString] =
              domainToCount[subCpdomainInString]! + count;
        }
      }
    }

    for (String domain in domainToCount.keys) {
      result.add(domainToCount[domain].toString() + ' ' + domain);
    }
    return result;
  }
}

// Either its element, or either its fields

void main() {
  final input1 = <String>[
    "900 google.mail.com",
    "50 yahoo.com",
    "1 intel.mail.com",
    "5 wiki.org"
  ];
  print(Solution.subdomainVisits(input1));

  final input2 = <String>[
    "9001 leetcode.com",
    "9001 discuss.leetcode.com",
    "9001 com"
  ];
print(Solution.subdomainVisits(input2));
}
