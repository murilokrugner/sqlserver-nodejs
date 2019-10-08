/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NVE010', {
    NVE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NVE_CGRPCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_CCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_LCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NVE_NUMCAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    NVE_CESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NVE_CAREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NVE_CSUBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NVE_CPART1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_CPART2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NVE_DTENCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NVE_DETENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    NVE_CPART3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_DTREAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NVE_DETREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    NVE_CPART4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_USUINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NVE_TPHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_VLHORA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NVE_CTABH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NVE_CTABS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NVE_DSPDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_TPERCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_DESPAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NVE_CIDIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NVE_ENCHON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_ENCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_ENCTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_EXITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_VIRTUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_LANTS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_LANDSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_LANTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_LITIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_CCLINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_CLJNV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NVE_CCASNV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_OBSCAD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NVE_OBSFAT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NVE_REDFAT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NVE_OK: {
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
    },
    NVE_CCLIAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_CLOJAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NVE_CCASAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_COBRAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NVE_TITEBI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    NVE_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_DTREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NVE_CPARTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVE_OBSREV: {
      type: "IMAGE",
      allowNull: true
    },
    NVE_NBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NVE_MODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVE_MATTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NVE_CPGEBI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NVE_TITSUG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NVE_CPART5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'NVE010'
  });
};
