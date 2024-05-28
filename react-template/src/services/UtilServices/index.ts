import _ from "lodash";

export const UtilServices = {
  isAnyEmpty: (...elements: any[]) =>
    elements.some((element) => _.isEmpty(element)),
};

export default UtilServices;
