echo Checking if this issue occurs...
npm install
gulp build
let number=$(cat bundle.js | grep Object.defineProperty | wc -l)

if [ $number > 0 ]
  then
    echo "Problem exists"
    echo $(cat bundle.js | grep Object.defineProperty)
    exit -1
  fi
echo "Woow there is no Object.defineProperty used in code!"
exit 0
