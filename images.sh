 #!/usr/bin/env bash

 set -o errexit
 set -o nounset

node scripts/images.js docs/PHOTOFLASH\ \(by\ everybody\) everybody
node scripts/images.js docs/PHOTOS\ CADEAUX\ \(by\ Emilie\ et\ Kaspar\) emilie-and-kaspar
node scripts/images.js docs/PHOTOS\ OFFICIELLES\ by\ Amélie\ Landry/3-LE\ SUD\ la\ totale france
node scripts/images.js docs/PHOTOS\ OFFICIELLES\ by\ Amélie\ Landry/2-BELGIQUE\ la\ totale belgium
node scripts/images.js docs/PHOTOS\ OFFICIELLES\ by\ Amélie\ Landry/1-La\ crème\ de\ la\ crème official