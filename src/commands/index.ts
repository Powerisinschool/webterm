import AboutFn from "./about";
import ContactFn from "./contact";
import HelpFn from "./help";
import ListFn from "./ls";
import ProjectsFn from "./projects";
import ResumeFn from "./resume";
import SkillsFn from "./skills";

interface ICommands {
    [key: string]: () => string
}

const reloadFn = () => {
    window.location.reload();
    return "";
}

const commands: ICommands = {
    about: AboutFn,
    contact: ContactFn,
    help: HelpFn,
    ls: ListFn,
    projects: ProjectsFn,
    reload: reloadFn,
    resume: ResumeFn,
    skills: SkillsFn,
    webterm: reloadFn,
};

export default commands;
