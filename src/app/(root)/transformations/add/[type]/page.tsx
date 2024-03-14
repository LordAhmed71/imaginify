import Header from "@/components/shared/Header";
import TransformationFrom from "@/components/shared/TransformationFrom";
import { transformationTypes } from "@/constants";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationFrom />
    </>
  );
};

export default AddTransformationTypePage;
