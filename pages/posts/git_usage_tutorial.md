---
title: Git的简单使用
date: 2025-11-25
update: 2025-11-25
categories: 教程
tags:
  - Git
  - 版本控制
---

## Git的基本概念

### 工作区域

1、**Git仓库**：Git 仓库是 Git 用于存储项目所有版本历史记录和元数据的地方。 它是一个隐藏的 .git 目录，通常位于项目根目录的内部。这是 Git 版本控制的核心，包含了所有的提交对象、分支、标签、配置信息等。

2、**工作目录**：工作目录是文件系统上看到的实际文件和目录的集合。 它是用户打开、编辑和处理项目文件的地方。当用户 `git clone` 一个仓库时，工作目录就是克隆下来的那一套文件。

3、**暂存区**：暂存区是一个中间区域，它存储了下一次提交(commit)所打算包含的所有更改的快照。 它不是一个真正的目录，而是一个文件 (.git/index)，其中保存了文件在下一次提交时会是什么样子的信息（具体来说是文件内容、权限、时间戳等数据的哈希值）。

<!-- more -->

### 三种状态

1、**已修改**：当用户对工作目录中的文件进行修改后，这些文件就处于“已修改”状态。 这意味着用户已经编辑了文件，但还没有告诉 Git 准备将这些修改保存到下一次快照中。

2、**已暂存**：当用户使用 `git add` 命令将“已修改”的文件或新文件添加到暂存区时，这些文件就变成了“已暂存”状态。 暂存区是 Git 的一个中间区域，它用来准备下一次提交的快照。用户可以选择性地将某些修改添加到暂存区，而将另一些修改保留在工作目录中。

3、**已提交**：当用户使用 `git commit` 命令时，Git 会将暂存区中的所有内容永久地存储到本地版本库中，形成一个新的提交历史记录。 此时，之前处于“已暂存”状态的文件就变成了“已提交”状态。每一个提交都是文件系统在一个特定时间点的快照。

### 基本的 Git 工作流程

1、在工作目录中修改文件。
   
2、暂存文件，将文件的快照放入暂存区域。
   
3、提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。

## Git的基本操作

### 获取Git仓库

#### 将现有目录初始化成Git仓库

进入项目根目录，在命令行输入

```bash
git init
```

执行 `git init` 后，Git 会在当前目录下创建一个名为 .git 的隐藏子目录。这个 .git 目录就是 Git 仓库，它包含了 Git 版本控制所需的所有必要文件和子目录（如 objects、refs、HEAD、config 等）。这是 Git 存储项目历史记录、分支、标签和配置信息的核心。

让 Git 开始追踪项目文件。添加文件到暂存区，通常，会添加所有现有文件：

```bash
git add .    # git add 命令可以实现对指定文件的追踪
```

进行第一次提交。将暂存区中的文件快照保存到 Git 仓库，创建项目的第一个版本：

```bash
git commit -m "Initial commit"    # -m后面跟着的是本次提交的简短描述信息
```

#### 克隆现有仓库

克隆仓库的命令格式是 `git clone [url]`。例如，要克隆Git的可链接库libgit2，可以用下面的命令：

```bash
git clone https://github.com/libgit2/libgit2
```

这会在当前目录下创建一个名为 “libgit2” 的目录，并在这个目录下初始化一个 .git 文件夹，从远程仓库拉取下所有数据放入 .git 文件夹，然后从中读取最新版本的文件的拷贝。如果你进入到这个新建的 libgit2 文件夹，你会发现所有的项目文件已经在里面了，准备就绪等待后续的开发和使用。如果你想在克隆远程仓库的时候，自定义本地仓库的名字，你可以使用如下命令：

```bash
git clone https://github.com/libgit2/libgit2 mylibgit
```

这将执行与上一个命令相同的操作，不过在本地创建的仓库名字变为 mylibgit。

### 检查当前文件状态

要查看文件处于哪些状态，可以使用 `git status` 命令

### 实际操作

下面我们用一个例子来实际操作一下，我们在桌面新建一个文件夹 `git_test`，首先在终端中使用 `git init` 命令将该文件夹初始化成一个Git仓库，终端中应该会输出：

```bash
Initialized empty Git repository in C:/Users/admim/Desktop/git_test/.git/
```

同时多了一个 `.git` 目录。然后我们使用 `git status` 命令查看一下状态，由于我们是一个新的仓库，终端中应该会输出：

```bash
PS C:\Users\admim\Desktop\git_test> git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

首先它会提示我们现在处于master分支上，然后显示还没有提交（commits）。然后我们新建一个文件 `README.md`，然后再次使用 `git status` 命令，终端输出：

```bash
PS C:\Users\admim\Desktop\git_test> git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)
```
#### 跟踪新文件

可以看到新建的 `README.md` 文件出现在 **Untracked files** 下面，Git没有跟踪这个文件，我们可以使用 `git add` 命令开始跟踪一个文件：

```bash
git add README.md
```

此时我们继续用 `git status` 命令查看文件状态，终端中输出：

```bash
PS C:\Users\admim\Desktop\git_test> git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
```

只要在 **Changes to be committed** 这行下面的，就说明是已暂存状态。如果此时提交，那么该文件此时此刻的版本将被留存在历史记录中。`git add` 命令使用文件或目录的路径作为参数；如果参数是目录的路径，该命令将递归地跟踪该目录下的所有文件。

#### 暂存已修改的文件

下面我们来修改刚刚这个新建的文件，比如说我们往其中添加一句话“Hello Git!”，保存后运行 `git status`，终端中输出：

```bash
PS C:\Users\admim\Desktop\git_test> git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md
```

我们可以看到这个文件同时出现在暂存区和非暂存区，这是因为Git暂存了你运行 `git add` 命令时的版本，如果这时候使用 `git commit` 命令提交，`README.md` 的版本是你最后一次运行 `git add` 命令时的那个版本，而不是你运行 `git commit` 时，在工作目录中的当前版本。所以，运行了 `git add` 之后又作了修订的文件，需要重新运行 `git add` 把最新版本重新暂存起来。

#### 提交更新

下面我们先使用 `git add README.md` 命令将刚刚修改过的文件暂存起来，然后使用 `git commit` 命令提交。如果你直接运行 `git commit` 命令，将会自动启动文本编辑器，要求我们输入本次提交的说明。（默认会打开Git Bash内置的Vim，可以使用 `git config --global core.editor` 命令设定你喜欢的编辑软件。）

我们也可以在 `git commit` 命令后添加 -m 选项，将提交信息与命令放在同一行：

```bash
git commit -m "add README.md file"
```

要注意的是，不填写提交信息是无法提交的。终端中输出：

```bash
[master (root-commit) 5814abb] add README.md file
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
```
`master` 是我们当前所在的分支名称；`(root-commit)` 表示这是一个根提交，因为这是仓库的第一次提交，它没有父提交，所以被称为根提交；`5814abb` 是这个提交的短哈希值，每个提交在 Git 中都有一个唯一的SHA-1哈希值来标识，这个短哈希值是完整哈希值的前几位，方便阅读查看；`add README.md file` 是本次提交填写的提交信息，描述了本次提交所做的更改内容和目的，建议每次提交都写清楚这次提交做了什么，方便以后查看；`1 file changed` 表示本次提交中，总共有1个文件发生了变化；`1 insertion(+)` 表示在这个变化的1个文件中，总共新增了1行内容；`create mode` 表示这个文件是本次提交中新创建的；`10064` 是文件的权限模式。100644 是一个常见的八进制表示，表示一个普通文件（100），并且拥有所有者读写、组读、其他用户读的权限；`README.md` 是被创建的文件的名称。

#### 忽略文件

一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。在这种情况下，我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件模式。格式规范如下：

- 所有空行或者以 ＃ 开头的行都会被 Git 忽略
- 可以使用标准的 glob 模式匹配
- 匹配模式可以以（/）开头防止递归
- 匹配模式可以以（/）结尾指定目录
- 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反

例子：

```bash
# 忽略所有以 .a 结尾的文件
*.a
# 不忽略 lib.a 文件
!lib.a
# 仅忽略 .gitignore 文件所在目录下的 TODO 文件，而不会匹配任何子目录中的相应文件
/TODO
# 忽略 build/ 目录及其所有内容
build/
# 忽略 doc/ 目录下所有以 .txt 结尾的文件，但仅限于 doc/ 目录本身
doc/*.txt
# 忽略 doc/ 目录及其任何子目录中所有以 .pdf 结尾的文件
doc/**/*.pdf
```

#### 移除文件

##### 从工作区和暂存区都移除文件

`git rm <文件名>`：不仅仅会从磁盘（工作区）上删除文件，还会将其从 Git 的暂存区中移除，然后下次提交时，Git 就会记录下这个文件的删除操作。 

```bash
git rm myfile.txt    # 移除单个文件
git rm file1.txt file2.txt    # 移除多个文件
git rm -r mydirectory/    # 移除整个目录及其内容，-r 表示递归删除，用于目录
git rm -f mymodifiedfile.txt    # 强制删除已修改但未暂存的文件
```

执行 `git rm` 之后，这个删除操作会被自动暂存。需要进行一次 git commit 来将这个删除操作永久记录到你的版本历史中。

##### 仅从暂存区移除文件（保留工作区文件）

`git rm --cached <文件名>`：你可能希望某个文件仍然留在你的工作目录中（磁盘上可见），但不再希望 Git 跟踪它（即将其从暂存区中移除，并从未来的提交中排除）。

```bash
git rm --cached sensitive_data.txt    # 从暂存区移除单个文件
git rm --cached -r build/    # 从暂存区移除整个目录及其内容
```

执行 `git rm --cached` 后，文件仍在工作目录中，没有被删除，但是已经从Git暂存区中移除，下次提交时，Git会记录下这个文件不再被跟踪。

#### 移动/重命名文件

`git mv <旧路径/旧文件名> <新路径/新文件名>`

```bash
git mv oldname.txt newname.txt    # 将同一个目录下的文件oldname.txt重命名为newname.txt
git mv file.txt src/file.txt    # 将根目录的文件file.txt移动到src/的子目录中
git mv file.txt src/anothername.txt    # 移动并且重命名
git mv old_dir/ new_dir/    # 移动目录
```

执行 `git mv` 后，会将更改自动添加到暂存区，可以用 `git status` 命令进行查看，需要执行 `git commit` 命令将提交更改。

##### 查看提交历史

