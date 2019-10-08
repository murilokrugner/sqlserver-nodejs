/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DUJ010', {
    DUJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUJ_NCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DUJ_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUJ_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUJ_NOMFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DUJ_INIVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DUJ_FIMVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DUJ_GERAPC: {
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
    DUJ_PERADT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUJ_TITFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUJ_BXAPDG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUJ_PAMOVB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUJ_TITNDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUJ_TITPDG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUJ_TITADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DUJ010'
  });
};
