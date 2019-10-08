/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VVD010', {
    VVD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VVD_CHAINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VVD_TIPOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VVD_TRACPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VVD_DATADR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VVD_DATVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VVD_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VVD_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    VVD_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VVD_EXPCPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VVD_ATUCUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VVD_GERTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VVD_NUMOSV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VVD_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VVD_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VVD_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VVD_LOJACL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VVD_SERNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VVD_NUMNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VVD_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VVD_TIPTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VVD_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VVD_CODVRE: {
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
    VVD_NUMPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VVD_LIBVOO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VVD_TIPTEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VVD_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'VVD010'
  });
};
