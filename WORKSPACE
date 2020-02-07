# Bazel workspace created by @bazel/create 1.2.4

# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/master/build-ref.html#workspace
workspace(
    # How this workspace would be referenced with absolute labels from another workspace
    name = "mumu",
    # Map the @npm bazel workspace to the node_modules directory.
    # This lets Bazel use the same node_modules as other local tooling.
    managed_directories = {"@npm": ["node_modules"]},
)

# Install the nodejs "bootstrap" package
# This provides the basic tools for running and packaging nodejs programs in Bazel
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "9473b207f1c5a61b603442cbfeeea8aaf2aa62870673fce2a1c52087f6ff4dc9",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/1.2.4/rules_nodejs-1.2.4.tar.gz"],
)

# The yarn_install rule runs yarn anytime the package.json or yarn.lock file changes.
# It also extracts and installs any Bazel rules distributed in an npm package.
load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")
#
#node_repositories(
#    node_repositories = {
#        "12.14.1-darwin_amd64": ("node-v12.14.1-darwin-x64.tar.gz", "node-v12.14.1-darwin-x64", "9aaf29d30056e2233fd15dfac56eec12e8342d91bb6c13d54fb5e599383dddb9"),
#        "12.14.1-linux_amd64": ("node-v12.14.1-linux-x64.tar.xz", "node-v12.14.1-linux-x64", "680a1263c9f5f91adadcada549f0a9c29f1b26d09658d2b501c334c3f63719e5"),
#        "12.14.1-windows_amd64": ("node-v12.14.1-win-x64.zip", "node-v12.14.1-win-x64", "6a4e54bda091bd02dbd8ff1b9f6671e036297da012a53891e3834d4bf4bed297"),
#    },
#    node_urls = ["https://nodejs.org/dist/v{version}/{filename}"],
#    # For deterministic builds, specify explicit NodeJS and Yarn versions.
#    node_version = "12.14.1",
#    yarn_repositories = {
#        "1.19.1": ("yarn-v1.19.1.tar.gz", "yarn-v1.19.1", "34293da6266f2aae9690d59c2d764056053ff7eebc56b80b8df05010c3da9343"),
#    },
#    yarn_urls = ["https://github.com/yarnpkg/yarn/releases/download/v{version}/{filename}"],
#    yarn_version = "1.19.1",
#)

yarn_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

# Install any Bazel rules which were extracted earlier by the yarn_install rule.
load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

# Setup TypeScript toolchain
load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")
ts_setup_workspace()
http_archive(
    name = "io_bazel_rules_sass",
    # Patch `rules_sass` to work around a bug that causes error messages to be not
    # printed in worker mode: https://github.com/bazelbuild/rules_sass/issues/96.
    sha256 = "c78be58f5e0a29a04686b628cf54faaee0094322ae0ac99da5a8a8afca59a647",
    strip_prefix = "rules_sass-1.25.0",
    urls = [
        "https://github.com/bazelbuild/rules_sass/archive/1.25.0.zip",
    ],
)

load("@io_bazel_rules_sass//:package.bzl", "rules_sass_dependencies")
rules_sass_dependencies()

# Setup repositories which are needed for the Sass rules.
load("@io_bazel_rules_sass//:defs.bzl", "sass_repositories")
sass_repositories()

http_archive(
    name = "bazel_toolchains",
    sha256 = "3c1299efcf64a4ecf4f6def7564db28879ad2870632144d77932e7910686d3f3",
    strip_prefix = "bazel-toolchains-1.1.2",
    url = "https://github.com/bazelbuild/bazel-toolchains/archive/1.1.2.tar.gz",
)
load("@bazel_toolchains//repositories:repositories.bzl", bazel_toolchains_repositories = "repositories")

bazel_toolchains_repositories()
