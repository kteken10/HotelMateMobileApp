export default interface QualificationModel {
  name: string;
  institution: string;
  startYear: string | number;
  endYear: string | number;
  editing?: boolean;
}
