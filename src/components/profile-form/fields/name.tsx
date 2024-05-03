import { Field } from "../../field";
import { ProfileValues } from "../use-profile-form";

export const Name = () => {
  return (
    <Field<ProfileValues["name"]> name="name" label="Name">
      {({ field, form }) => {
        return (
          <input
            name={field.name}
            disabled={form.isSubmitting}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            className="h-12 w-full rounded-md border border-gray-300 px-4 disabled:bg-gray-100 disabled:opacity-70"
          />
        );
      }}
    </Field>
  );
};
