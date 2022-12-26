import * as core from '@actions/core';
import * as github from '@actions/github';
import * as exec from "@actions/exec";

const run = () => {
    core.notice('Hello from my custom JavaScript action!');
};
run()