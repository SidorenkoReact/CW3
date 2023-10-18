import {useState} from "react";

type Callback = (...args: any[]) => Promise<void>

export const useFetching = (callback: Callback): [Function, boolean, string] => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetch = async () => {
        try {
            setIsLoading(true)
            await callback()
        }

        catch (e) {
            if (e instanceof Error) setError(e.message)
        }

        finally {
            setIsLoading(false)
        }
    }

    return [fetch, isLoading, error]
}