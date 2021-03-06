import {
  Pipeline,
  PipelineParameter,
} from '../pipelines/models/pipelines.model';
import {Project} from "../shared/models/users.models";

export interface ApplicationsResponse {
  applications: Application[];
}

export interface ExecutionsResponse {
  executions: ExecutionTemplate[];
}

export interface ApplicationResponse {
  application: Application;
}

export interface Application extends BaseApplicationProperties {
  id: string;
  name: string;
  project: Project;
  sparkConf: SparkConf;
  stepPackages: string[];
  applicationProperties: object;
  executions: Execution[];
  requiredParameters: string[];
  pipelineManager: ClassInfo;
  sparkUdfs?: ClassInfo[];
  json4sSerializers?: Json4sSerializers;
  layout?: object;
}

export interface SparkConf {
  kryoClasses: string[];
  setOptions: NameValuePair[];
}

export interface Json4sSerializers {
  customSerializers?: ClassInfo[];
  enumIdSerializers?: ClassInfo[];
  enumNameSerializers?: ClassInfo[];
}

export interface Execution extends BaseApplicationProperties {
  id: string;
  parents: string[];
  pipelineIds?: string[];
  initialPipelineId: string;
  mergeGlobals: boolean;
}

export interface ExecutionTemplate extends Execution, ClassComponentProperties {
  description: string;
}

export interface BaseApplicationProperties {
  pipelines?: Pipeline[];
  globals: object;
  pipelineListener: ClassInfo;
  securityManager: ClassInfo;
  stepMapper: ClassInfo;
  sparkListeners?: ClassInfo[];
  pipelineParameters: PipelineParameter[];
}

export interface ClassComponentProperties {
  exposePipelineManager: boolean;
  pipelineListener: ClassInfo;
  securityManager: ClassInfo;
  stepMapper: ClassInfo;
  sparkListeners?: ClassInfo[];
  pipelineManager?: ClassInfo;
}

export interface ClassInfo {
  className: string;
  parameters: object;
}

export interface NameValuePair {
  name: string;
  value: string;
}
