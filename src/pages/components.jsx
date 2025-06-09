import Button from "../components/Button"

function Components() {
    return (
        <main className="p-5">
            <h2 className="mb-2 text-lg font-bold">Buttons</h2>
            <div className="flex gap-[20px]">
                <div>
                    <p>PrimaryButton</p>
                    <Button variant="primary">Hello</Button>
                </div>

                <div>
                    <p>InfoButton</p>
                    <Button variant="info">Hello</Button>
                </div>

                <div>
                    <p>LinkButton</p>
                    <Button variant="link">Hello</Button>
                </div>
            </div>
        </main>
    )
}

export default Components
