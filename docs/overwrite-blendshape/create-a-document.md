---
sidebar_position: 2
---

# 任意のシェイプキーの上書き

:::note
現在、この説明は簡易的にしか書かれておりません。  
後日加筆予定です。
:::

```BSO Overwrite BlendShape```を用いると、リップシンクに限らない全てのシェイプキ―を、自由にアニメーションで上書きできます。

![fix-blendshape-attach](../tutorial-extras/img/fix-blendshape-attach.png)

上書きされるシェイプキ―と、上書き用のアニメーションのペアは
- Add Pair で 追加
- Remove Last Pair で 削除

することができます。

使い方は```BSO Overwrite Lipsync```と同様に
1. 上書きしたいシェイプキ―を含むメッシュにアタッチする
2. 上書き用アニメーションを制作する
3. 上書き用アニメーションを、スクリプトにD&Dする

となっております。