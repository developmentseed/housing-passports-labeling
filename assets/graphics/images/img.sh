for img in */*.jpg; do 
    filename=${img%.*};
    path=$(dirname "${img}")
    echo $path
    w=$(identify -format '%w' $img)
    if ((512 < $w)); then
        ffmpeg -i $img -y -vf scale=512:-1 $filename-temp.jpg
        rm $img
        mv $filename-temp.jpg $img
        nw=$(identify -format '%w' $img)
        echo $w "======" $nw
    else
        echo $img "=====" $w
    fi
done

