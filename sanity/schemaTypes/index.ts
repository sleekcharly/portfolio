import { type SchemaTypeDefinition } from 'sanity';
import profile from './profile';
import project from './project';
import skill from './skill';
import education from './education';
import service from './service';
import blog from './blog';
import contact from './contact';
import siteSettings from './siteSettings';
import navigation from './navigation';
import experience from './experience';
import certification from './certification';
import achievement from './achievement';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    project,
    skill,
    education,
    experience,
    service,
    blog,
    contact,
    siteSettings,
    navigation,
    certification,
    achievement
  ],
};
