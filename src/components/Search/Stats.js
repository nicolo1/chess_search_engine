import { getDateStringify, isEmpty } from "../../service/app.service";

const StatTable = ({ data, label }) => {
    if (!data) return null;
    return (
        <table>
            <thead>
                <tr>
                    <th className="stats-list-heading">{label}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="stats-sub-heading">Highest</td>
                    <td className="stats-info">
                        <span className={"green"}>
                            {data.best ? data.best.rating : ""}
                        </span>
                        {data.best ? `(${getDateStringify(data.best.date)})` : ""}
                    </td>
                </tr>
                <tr>
                    <td className="stats-sub-heading">Recent</td>
                    <td className="stats-info">
                        {data.last ? data.last.rating : ""}
                        {data.last ? `(${getDateStringify(data.last.date)})` : ""}
                    </td>
                </tr>
                <tr>
                    <td className="stats-sub-heading">W/D/L</td>
                    <td className="stats-info">
                        <span className={"green"}>
                            {data.record ? data.record.win : ""}
                        </span>
                        /
                        <span className={"blue"}>
                            {data.record ? data.record.draw : ""}
                        </span>
                        /
                        <span className={"red"}>
                            {data.record ? data.record.loss : ""}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

const PuzzleTable = ({ data }) => {
    if (!data) return null;
    return (
        <table>
            <thead>
                <tr>
                    <th className="stats-list-heading">Puzzles</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="stats-sub-heading">Highest</td>
                    <td className="stats-info">
                        <span className={"green"}>
                            {data.highest ? data.highest.rating : ""}
                        </span>
                        ({data.highest ? getDateStringify(data.highest.date) : ""})
                    </td>
                </tr>
                <tr>
                    <td className="stats-sub-heading">Lowest</td>
                    <td className="stats-info">
                        {data.lowest ? data.lowest.rating : ""}
                        ({data.lowest ? getDateStringify(data.lowest.date) : ""})
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

const Stats = ({ stats }) => {
    if (!stats) return null;
    return (
        <div id="stats-component-container">
            <h1 className="main-heading">Stats</h1>
            {!isEmpty(stats.chess_rapid) ? <StatTable data={stats.chess_rapid} label="Rapid" /> : ""}
            <br />
            <br />
            {!isEmpty(stats.chess_blitz) ? <StatTable data={stats.chess_blitz} label="Blitz" /> : ""}
            <br />
            <br />
            {!isEmpty(stats.tactics) ? <PuzzleTable data={stats.tactics} /> : ""}
        </div>
    );
};

export default Stats;
