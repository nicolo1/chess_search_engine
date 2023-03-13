import Grid from "@mui/material/Grid";
import { getDateStringify } from "../../service/app.service";
import { isEmpty } from "../../service/app.service";

const Stats = ({ stats }) => {
    const rapid = () => {
        return (
            <>
                <h3 className="stats-list-heading"></h3>
                <table>
                    <thead>
                        <tr>
                            <th className="stats-list-heading">Rapid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="stats-sub-heading">Highest</td>
                            <td className="stats-info">
                                <span className={"green"}>
                                    {stats.chess_rapid
                                        ? stats.chess_rapid.best
                                            ? stats.chess_rapid.best.rating
                                            : ""
                                        : ""}
                                </span>

                                {stats.chess_rapid
                                    ? stats.chess_rapid.best
                                        ? `(${getDateStringify(
                                              stats.chess_rapid.best.date
                                          )})`
                                        : ""
                                    : ""}
                            </td>
                        </tr>
                        <tr>
                            <td className="stats-sub-heading">Recent</td>
                            <td className="stats-info">
                                {stats.chess_rapid
                                    ? stats.chess_rapid.last.rating
                                    : ""}
                                (
                                {stats.chess_rapid
                                    ? `(${getDateStringify(
                                          stats.chess_rapid.last.date
                                      )})`
                                    : ""}
                                )
                            </td>
                        </tr>
                        <tr>
                            <td className="stats-sub-heading">W/D/L</td>
                            <td className="stats-info">
                                <span className={"green"}>
                                    {stats.chess_rapid
                                        ? stats.chess_rapid.record.win
                                        : ""}
                                </span>
                                /
                                <span className={"blue"}>
                                    {stats.chess_rapid
                                        ? stats.chess_rapid.record.draw
                                        : ""}
                                </span>
                                /
                                <span className={"red"}>
                                    {stats.chess_rapid
                                        ? stats.chess_rapid.record.loss
                                        : ""}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    };

    const blitz = () => {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th className="stats-list-heading">Blitz</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="stats-sub-heading">Highest</td>
                            <td className="stats-info">
                                <span className={"green"}>
                                    {stats.chess_blitz
                                        ? stats.chess_blitz.best
                                            ? stats.chess_blitz.best.rating
                                            : ""
                                        : ""}
                                </span>
                                {stats.chess_blitz
                                    ? stats.chess_blitz.best
                                        ? `(${getDateStringify(
                                              stats.chess_blitz.best.date
                                          )})`
                                        : ""
                                    : ""}
                            </td>
                        </tr>
                        <tr>
                            <td className="stats-sub-heading">Recent</td>
                            <td className="stats-info">
                                {stats.chess_blitz
                                    ? stats.chess_blitz.last.rating
                                    : ""}

                                {stats.chess_blitz
                                    ? `(${getDateStringify(
                                          stats.chess_blitz.last.date
                                      )})`
                                    : ""}
                            </td>
                        </tr>
                        <tr>
                            <td className="stats-sub-heading">W/D/L</td>
                            <td className="stats-info">
                                <span className={"green"}>
                                    {stats.chess_blitz
                                        ? stats.chess_blitz.record.win
                                        : ""}
                                </span>
                                /
                                <span className={"blue"}>
                                    {stats.chess_blitz
                                        ? stats.chess_blitz.record.draw
                                        : ""}
                                </span>
                                /
                                <span className={"red"}>
                                    {stats.chess_blitz
                                        ? stats.chess_blitz.record.loss
                                        : ""}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    };

    const puzzles = () => {
        return (
            <>
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
                                    {stats.tactics
                                        ? stats.tactics.highest.rating
                                        : ""}
                                </span>
                                (
                                {stats.tactics
                                    ? getDateStringify(
                                          stats.tactics.highest.date
                                      )
                                    : ""}
                                )
                            </td>
                        </tr>
                        <tr>
                            <td className="stats-sub-heading">Lowest</td>
                            <td className="stats-info">
                                {stats.tactics
                                    ? stats.tactics.lowest.rating
                                    : ""}
                                (
                                {stats.tactics
                                    ? getDateStringify(
                                          stats.tactics.lowest.date
                                      )
                                    : ""}
                                )
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    };

    if (stats) {
        return (
            <div id="stats-component-container">
                <h1 className="main-heading">Stats</h1>
                {!isEmpty(stats.chess_rapid) ? rapid() : ""}
                <br />
                <br />
                {!isEmpty(stats.chess_blitz) ? blitz() : ""}
                <br />
                <br />
                {!isEmpty(stats.tactics) ? puzzles() : ""}
            </div>
        );
    }
};

export default Stats;
