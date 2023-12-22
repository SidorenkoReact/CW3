import {useEffect, useRef} from "react";



export const useObserver = (targetElement: HTMLDivElement | null, hasMore: boolean, isLoading: boolean, isNotActive: boolean, callback: Function) => {
    const observer = useRef<IntersectionObserver>()

    useEffect(() => {
        if (isLoading || isNotActive) return

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                callback()
            }
        })

        if (targetElement)
            observer.current?.observe(targetElement)

        return () => observer.current?.disconnect()

    },[isLoading, isNotActive, hasMore])
}
