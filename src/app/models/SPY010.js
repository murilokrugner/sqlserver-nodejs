/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPY010', {
    PY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PY_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PY_VISITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PY_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PY_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PY_CRACHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    PY_NOMEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    PY_DTVISIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PY_DTBAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PY_DATAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PY_ENTRADA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PY_DATAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PY_SAIDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PY_TIPOVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PY_CLASSIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PY_CODHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PY_PLACVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'SPY010'
  });
};
