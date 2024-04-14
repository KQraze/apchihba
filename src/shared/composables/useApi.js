import { ref } from 'vue';

function parseLaravelErrors(laravelErrors) {
  if (laravelErrors?.errors) {
    for (let field in laravelErrors.errors) {
      let allErrors = '';
      laravelErrors.errors[field].forEach(function (error) {
        allErrors += error + ' ';
      });
      laravelErrors.errors[field] = allErrors;
    }
  }
  return laravelErrors;
}

export function useApi(fetcherMethod) {
  const isLoading = ref(false);
  const result = ref(undefined);
  const error = ref(undefined);
  const serverError = ref(undefined);

  const execute = async (...args) => {
    isLoading.value = true;
    error.value = undefined;
    serverError.value = undefined;
    try {
      const response = await fetcherMethod(...args);
      result.value = response.data;
      return response.data;
    } catch (e) {
      serverError.value = e;
      error.value = parseLaravelErrors(e?.response?.data?.error);
      result.value = undefined;
      return e;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    result,
    error,
    serverError,
    execute
  };
}