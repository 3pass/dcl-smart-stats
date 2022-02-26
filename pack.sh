#!/bin/bash

cd ./items/${1}
dcl pack
mv item.zip ../../dist/${1}.zip
