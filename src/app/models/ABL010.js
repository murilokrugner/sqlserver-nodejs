/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ABL010', {
    ABL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABL_NRCHAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ABL_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABL_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ABL_DTINCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABL_HREMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ABL_DTHELP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABL_HRHELP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ABL_CODTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    ABL_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ABL_TEMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    ABL_PRXSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABL_PRXTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    ABL_REAVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ABL_DRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABL_HRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ABL_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABL_REAMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'ABL010'
  });
};
