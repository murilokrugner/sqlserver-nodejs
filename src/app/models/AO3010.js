/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AO3010', {
    AO3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AO3_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO3_CODUND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO3_CODEQP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO3_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AO3_NVESTN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AO3_SINCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO3_SINTAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO3_SINCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO3_PERCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO3_PERTAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO3_SINTIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AO3_EXGUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AO3_EXGEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AO3_HABSIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO3_BICOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO3_BITAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO3_BICONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO3_SNAEXG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AO3_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO3_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO3_IMGPTH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    AO3_PMUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AO3_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO3_ATPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'AO3010'
  });
};
