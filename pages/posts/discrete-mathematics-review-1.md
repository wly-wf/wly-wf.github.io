---
title: 离散数学复习（一）
date: 2025-8-18
categories: 学习
tags:
  - 离散数学
  - 复习
---

>**记录一下复习离散数学的过程**

<!-- more -->

## 数理逻辑

### 等值式

<center><b>24个等值式</b></center>

|      名称      |                             公式                             |    名称    |                             公式                             |
| :------------: | :----------------------------------------------------------: | :--------: | :----------------------------------------------------------: |
|   双重否定律   |               $A \Leftrightarrow \neg \neg A$                |   幂等律   | $A \Leftrightarrow A \vee A$<br />$A \Leftrightarrow A \wedge A$ |
|     交换律     | $A \vee B \Leftrightarrow B \vee A$<br />$A \wedge B \Leftrightarrow B \wedge A$ |   结合律   | $(A \vee B) \vee C \Leftrightarrow A \vee (B \vee C)$<br />$(A \wedge B) \wedge C \Leftrightarrow A \wedge (B \wedge C)$ |
|     分配律     | $A \vee (B \wedge C) \Leftrightarrow (A \vee B) \wedge (A \vee C)$<br />$A \wedge (B \vee C) \Leftrightarrow (A \wedge B) \vee (A \wedge C)$ |  德摩根律  | $\neg (A \vee B) \Leftrightarrow \neg A \wedge \neg B$<br />$\neg (A \wedge B) \Leftrightarrow \neg A \vee \neg B$ |
|     吸收律     | $A \vee (A \wedge B) \Leftrightarrow A$<br />$A \wedge (A \vee B) \Leftrightarrow A$ |    零律    | $A \vee 1 \Leftrightarrow 1$<br />$A \wedge 0 \Leftrightarrow 0$ |
|     同一律     | $A \vee 0 \Leftrightarrow A$<br />$A \wedge 1 \Leftrightarrow A$ |   排中律   |              $A \vee \neg A \Leftrightarrow 1$               |
|     矛盾律     |             $A \wedge \neg A \Leftrightarrow 0$              | 蕴涵等值式 |       $A \rightarrow B \Leftrightarrow \neg A \vee B$        |
|   等价等值式   | $A \leftrightarrow B \Leftrightarrow (A \rightarrow B) \wedge (B \rightarrow A)$ |  假言易位  | $A \rightarrow B \Leftrightarrow \neg B \rightarrow \neg A$  |
| 等价否定等值式 | $A \leftrightarrow B \Leftrightarrow \neg A \leftrightarrow \neg B$ |   归谬论   | $(A \rightarrow B) \wedge (A \rightarrow \neg B) \Leftrightarrow \neg A$ |



<center><b>9个推理定律</b></center>

|                             公式                             |                  定律                  |
| :----------------------------------------------------------: | :------------------------------------: |
|                  $A \Rightarrow (A \lor B)$                  |                 附加律                 |
|                 $(A \land B) \Rightarrow A$                  |                 化简律                 |
|              $(A \to B) \land A \Rightarrow B$               |                假言推理                |
|         $(A \to B) \land \neg B \Rightarrow \neg A$          |                 拒取律                 |
|           $(A \lor B) \land \neg B \Rightarrow A$            |               析取三段论               |
|      $(A \to B) \land (B \to C) \Rightarrow (A \to C)$       |               假言三段论               |
| $(A \leftrightarrow B) \land (B \leftrightarrow C) \Rightarrow (A \leftrightarrow C)$ |               等价三段论               |
| $(A \to B) \land (C \to D) \land (A \lor C) \Rightarrow (B \lor D)$<br />$(A \to B) \land (\neg A \to B) \Rightarrow B$ | 构造性二难<br />构造性二难（特殊形式） |
| $(A \to B) \land (C \to D) \land (\neg B \lor \neg D) \Rightarrow (\neg A \lor \neg C)$ |               破坏性二难               |

