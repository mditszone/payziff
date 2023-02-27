f = open("C:\\Users\\hp\Documents\\test_data.txt", 'r')
linesCount = 0;
foundLines = ''
for line in f.readlines():
    firstSplit = line.split(' ');
    linesCount = linesCount + 1
    if firstSplit[3] == '18ff56da':
        f.seek(0)
        for i, item in enumerate(f):
            if i >= linesCount:
                print(item);
                foundLines = foundLines + item + '\n'
                secondSplit = item.split(' ')
                if secondSplit[3] == '18ff56da':
                    break

writeFile = open("C:\\Users\\hp\Documents\\write_test.txt", 'a');
writeFile.write(foundLines);

