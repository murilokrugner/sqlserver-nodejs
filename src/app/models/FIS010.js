/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIS010', {
    FIS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIS_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FIS_IDMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FIS_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIS_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FIS_PARCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIS_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIS_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIS_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIS_TIPAVP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIS_DTAVP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIS_VLRAVP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIS_TAXAVP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIS_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FIS_CODIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIS_VLRIND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FIS_CRITIC: {
      type: "IMAGE",
      allowNull: true
    },
    FIS_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIS_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIS_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIS_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FIS_LE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FIS_SEQBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'FIS010'
  });
};
