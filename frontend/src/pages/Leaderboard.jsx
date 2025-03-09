import Spinner from "@/custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  const { loading, leaderboard } = useSelector((state) => state.user);
  return (
    <section className="w-full min-h-screen flex flex-col bg-background px-5 pt-20">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:gap-2 mb-5">
            <h1 className="text-primary text-3xl font-bold mb-2 sm:text-4xl md:text-5xl lg:text-6xl">
              Bidders Leaderboard
            </h1>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-card border border-border my-5">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">Profile Pic</th>
                  <th className="py-2 px-4 text-left">Username</th>
                  <th className="py-2 px-4 text-left">Bid Expenditure</th>
                  <th className="py-2 px-4 text-left">Auctions Won</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {leaderboard.slice(0, 100).map((element, index) => (
                  <tr key={element._id} className="border-b border-border">
                    <td className="flex gap-2 items-center py-2 px-4">
                      <span className="font-semibold text-xl w-7 hidden sm:block">
                        {index + 1}
                      </span>
                      <span>
                        <img
                          src={element.profileImage?.url}
                          alt={element.userName}
                          className="h-12 w-12 object-cover rounded-full"
                        />
                      </span>
                    </td>
                    <td className="py-2 px-4">{element.userName}</td>
                    <td className="py-2 px-4">{element.moneySpent}</td>
                    <td className="py-2 px-4">{element.auctionsWon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
};

export default Leaderboard;
