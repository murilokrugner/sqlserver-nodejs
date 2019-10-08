/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDO010', {
    CDO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDO_CODAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CDO_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDO_TPAPUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDO_UTILI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDO_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CDO_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    CDO_DESCR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDO_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    },
    CDO_DESCD: {
      type: "IMAGE",
      allowNull: true
    },
    CDO_CODCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
    },
    CDO_CODUTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CDO_CODREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CDO_AGRUPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDO_TPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDO_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CDO_GNRESE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDO_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDO_NFDET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CDO010'
  });
};
