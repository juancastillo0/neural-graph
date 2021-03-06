import { observer } from "mobx-react-lite";
import React from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import styled from "styled-components";
import { rootStore } from "../App";
import { OperationModel } from "./operation-model";

export type Shape = (number | undefined)[];

const StyledOperation = styled.div`
  z-index: 1;
  cursor: pointer;
  position: absolute;
  box-shadow: 0 1px 4px 1px #eee;
  padding: 6px;
  background: #fff;
  border-radius: 6;
  border: 1px solid #eee;
`;

type OperationViewProps = { operation: OperationModel };
export const OperationView: React.FC<OperationViewProps> = observer(
  ({ operation }) => {
    const onDrag = React.useCallback(
      (_: DraggableEvent, data: DraggableData) => {
        operation.move(data.deltaX, data.deltaY);
      },
      [operation]
    );
    const selectingInput = rootStore.selectingInputFor !== undefined;
    const isValidInput =
      selectingInput && rootStore.selectingInputFor!.data.validInput(operation);

    const onClick = React.useCallback(
      (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(operation);
        if (selectingInput) {
          if (isValidInput) {
            rootStore.assignInput(operation);
          }
        } else {
          rootStore.selectOperation(operation);
        }
      },
      [operation, selectingInput, isValidInput]
    );
    // const [_, setDivRef] = React.useState<HTMLDivElement | null>(null);
    const { x, y, name } = operation;

    return (
      <Draggable onDrag={onDrag} position={{ x, y }} bounds="parent">
        <StyledOperation
          ref={(e) => {
            if (e === null) return;
            operation.setSize(e.getBoundingClientRect());
          }}
          onClick={onClick}
          style={
            selectingInput
              ? { cursor: isValidInput ? "pointer" : "not-allowed" }
              : undefined
          }
        >
          {`Layer ${name}`}
        </StyledOperation>
      </Draggable>
    );
  }
);

// export const createOp = <V extends { [key: string]: FieldSpec }>(
//   name: string,
//   data: V,
//   outputShape: (
//     model: Instance<
//       IModelType<{ [key in keyof V]: ReturnType<V[key]["mobxProp"]> }, {}>
//     >,
//     inputs: OperationModelT[]
//   ) => Shape
// ) => {
//   const props = Object.entries(data).reduce(
//     (acc, [k, v]) => {
//       acc[k as keyof V] = v.mobxProp() as any;
//       return acc;
//     },
//     {} as {
//       [key in keyof V]: ReturnType<V[key]["mobxProp"]>;
//     }
//   );

//   return types
//     .model(name, {
//       ...props,
//       OP_TYPE: types.optional(types.literal(name), name),
//       inputs: types.array(types.reference(types.late(() => OperationModel))),
//     })
//     .actions((self) => ({
//       setValue<K extends string & keyof V>(name: K, value: any) {
//         self[name] = value;
//       },
//     }))
//     .views((self) => {
//       const errors = observable.map<string, string>();
//       return {
//         outputShape(): Shape {
//           return outputShape(self as any, self.inputs);
//         },
//         errorsMap() {
//           return errors;
//         },
//         form() {
//           return <PropertiesTable self={self} errors={errors} data={data} />;
//         },
//       };
//     });
// };
